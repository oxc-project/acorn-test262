__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 49,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 47,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 26,
                "end": 47,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 29,
                  "end": 47,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 31,
                      "end": 46,
                      "argument": {
                        "type": "Literal",
                        "start": 38,
                        "end": 46,
                        "raw": "\"I am B\"",
                        "value": "I am B"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
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
      "start": 51,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 58,
        "end": 89,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 73,
          "end": 89,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 75,
              "end": 87,
              "argument": {
                "type": "Literal",
                "start": 82,
                "end": 87,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 25,
          "end": 45,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 27,
              "end": 43,
              "argument": {
                "type": "Literal",
                "start": 34,
                "end": 42,
                "raw": "\"backup\"",
                "value": "backup"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
  "end": 218,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 31,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 24,
          "end": 31
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "decorators": [],
            "name": "specify",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 49,
            "end": 74,
            "alternate": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Literal",
              "start": 57,
              "end": 62,
              "raw": "\"./0\"",
              "value": "./0"
            },
            "test": {
              "type": "CallExpression",
              "start": 49,
              "end": 54,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 88,
            "decorators": [],
            "name": "myModule",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 91,
            "end": 106,
            "options": null,
            "source": {
              "type": "Identifier",
              "start": 98,
              "end": 105,
              "decorators": [],
              "name": "specify",
              "optional": false,
              "typeAnnotation": null
            },
            "phase": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 121,
            "decorators": [],
            "name": "myModule1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 124,
            "end": 141,
            "options": null,
            "source": {
              "type": "Identifier",
              "start": 131,
              "end": 140,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "phase": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 156,
            "decorators": [],
            "name": "myModule2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 159,
            "end": 187,
            "options": null,
            "source": {
              "type": "ConditionalExpression",
              "start": 166,
              "end": 186,
              "alternate": {
                "type": "Literal",
                "start": 182,
                "end": 186,
                "raw": "null",
                "value": null
              },
              "consequent": {
                "type": "Literal",
                "start": 174,
                "end": 179,
                "raw": "\"./1\"",
                "value": "./1"
              },
              "test": {
                "type": "CallExpression",
                "start": 166,
                "end": 171,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 169,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "phase": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 202,
            "decorators": [],
            "name": "myModule3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 205,
            "end": 217,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 212,
              "end": 216,
              "raw": "null",
              "value": null
            },
            "phase": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
