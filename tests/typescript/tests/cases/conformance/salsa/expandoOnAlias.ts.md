__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Vue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 51,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 51,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 50,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 48,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 47,
                    "end": 48,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 35,
        "value": "./vue",
        "raw": "\"./vue\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 89,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 89,
          "end": 99,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 102,
          "end": 104,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 116,
      "expression": {
        "type": "NewExpression",
        "start": 106,
        "end": 115,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 113,
          "decorators": [],
          "name": "Vue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 196,
          "end": 204,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 202,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 207,
          "end": 208,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 342,
      "expression": {
        "type": "AssignmentExpression",
        "start": 328,
        "end": 341,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 328,
          "end": 336,
          "object": {
            "type": "Identifier",
            "start": 328,
            "end": 334,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 339,
          "end": 341,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 352,
      "expression": {
        "type": "MemberExpression",
        "start": 343,
        "end": 351,
        "object": {
          "type": "Identifier",
          "start": 343,
          "end": 349,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 353,
      "end": 362,
      "expression": {
        "type": "MemberExpression",
        "start": 353,
        "end": 361,
        "object": {
          "type": "Identifier",
          "start": 353,
          "end": 359,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
