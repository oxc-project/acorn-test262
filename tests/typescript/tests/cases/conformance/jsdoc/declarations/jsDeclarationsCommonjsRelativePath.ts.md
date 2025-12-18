__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 26,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 43
          },
          "optional": false,
          "computed": false,
          "start": 29,
          "end": 43
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 53
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 53
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 48,
              "end": 53
            }
          ],
          "start": 46,
          "end": 55
        },
        "start": 29,
        "end": 55
      },
      "directive": null,
      "start": 29,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "'use strict'",
    "start": 0,
    "end": 12,
    "range": [
      0,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 14,
    "end": 19,
    "range": [
      14,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 48,
    "end": 53,
    "range": [
      48,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 35
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./thing",
                  "raw": "'./thing'",
                  "start": 36,
                  "end": 45
                }
              ],
              "optional": false,
              "start": 28,
              "end": 46
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "optional": false,
            "computed": false,
            "start": 28,
            "end": 52
          },
          "definite": false,
          "start": 20,
          "end": 52
        }
      ],
      "declare": false,
      "start": 14,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 59
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "optional": false,
          "computed": false,
          "start": 53,
          "end": 67
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 77
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 77
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 72,
              "end": 77
            }
          ],
          "start": 70,
          "end": 79
        },
        "start": 53,
        "end": 79
      },
      "directive": null,
      "start": 53,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "'use strict'",
    "start": 0,
    "end": 12,
    "range": [
      0,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 14,
    "end": 19,
    "range": [
      14,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 28,
    "end": 35,
    "range": [
      28,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "String",
    "value": "'./thing'",
    "start": 36,
    "end": 45,
    "range": [
      36,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 60,
    "end": 67,
    "range": [
      60,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  }
]
```
