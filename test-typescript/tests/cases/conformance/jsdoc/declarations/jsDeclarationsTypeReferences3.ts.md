__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 51,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 51,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 51,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "Something",
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
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "\"fs\"",
        "value": "fs",
        "regex": null,
        "bigint": null
      }
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
  "start": 32,
  "end": 148,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 47,
            "decorators": [],
            "name": "Something",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 50,
            "end": 73,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 50,
              "end": 63,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "raw": "\"fs\"",
                  "value": "fs",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 57,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 64,
              "end": 73,
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 96,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 96,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 91,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 75,
            "end": 89,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 82,
              "end": 89,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 94,
          "end": 96,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 97,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 97,
          "end": 115,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 97,
            "end": 113,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 97,
              "end": 111,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 103,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 111,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 118,
          "end": 148,
          "properties": [
            {
              "type": "Property",
              "start": 124,
              "end": 146,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 124,
                "end": 129,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "NewExpression",
                "start": 131,
                "end": 146,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "decorators": [],
                  "name": "Something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
