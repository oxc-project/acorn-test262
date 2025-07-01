__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Vue",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 17,
          "end": 19
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 39
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 45
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 47,
                    "end": 48
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 44,
                  "end": 48
                }
              ],
              "start": 42,
              "end": 50
            },
            "definite": false,
            "start": 33,
            "end": 50
          }
        ],
        "declare": false,
        "start": 27,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "importKind": "value",
          "start": 14,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./vue",
        "raw": "\"./vue\"",
        "start": 28,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
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
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 99
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 99
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 102,
          "end": 104
        },
        "start": 89,
        "end": 104
      },
      "directive": null,
      "start": 89,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Vue",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 113
        },
        "typeArguments": null,
        "arguments": [],
        "start": 106,
        "end": 115
      },
      "directive": null,
      "start": 106,
      "end": 116
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
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 196,
          "end": 204
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 207,
          "end": 208
        },
        "start": 196,
        "end": 208
      },
      "directive": null,
      "start": 196,
      "end": 209
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
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 334
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 336
          },
          "optional": false,
          "computed": false,
          "start": 328,
          "end": 336
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 339,
          "end": 341
        },
        "start": 328,
        "end": 341
      },
      "directive": null,
      "start": 328,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 349
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 351
        },
        "optional": false,
        "computed": false,
        "start": 343,
        "end": 351
      },
      "directive": null,
      "start": 343,
      "end": 352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 359
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "optional": false,
        "computed": false,
        "start": 353,
        "end": 361
      },
      "directive": null,
      "start": 353,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 362
}
```
