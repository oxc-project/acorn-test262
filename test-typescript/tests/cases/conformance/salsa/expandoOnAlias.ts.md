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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 51,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 51,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 50,
            "definite": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 47,
                    "end": 48,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 35,
        "raw": "\"./vue\"",
        "value": "./vue",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null
          }
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 89,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 89,
          "end": 99,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 102,
          "end": 104,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 106,
        "end": 115,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 113,
          "decorators": [],
          "name": "Vue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 196,
          "end": 204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 202,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 207,
          "end": 208,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 342,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 328,
        "end": 341,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 328,
          "end": 336,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 328,
            "end": 334,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 339,
          "end": 341,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 352,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 343,
        "end": 351,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 343,
          "end": 349,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 353,
      "end": 362,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 353,
        "end": 361,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 353,
          "end": 359,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
