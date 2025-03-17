__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 110,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 69,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 27,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 69,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 67,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 46,
                "end": 67,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 49,
                  "end": 67,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 51,
                      "end": 66,
                      "argument": {
                        "type": "Literal",
                        "start": 58,
                        "end": 66,
                        "value": "I am B",
                        "raw": "\"I am B\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 109,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 78,
        "end": 109,
        "id": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 93,
          "end": 109,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 95,
              "end": 107,
              "argument": {
                "type": "Literal",
                "start": 102,
                "end": 107,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "name": "backup",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "value": "backup",
                "raw": "\"backup\""
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 219,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 31,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 24,
          "end": 31
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "name": "specify",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 49,
            "end": 74,
            "test": {
              "type": "CallExpression",
              "start": 49,
              "end": 54,
              "callee": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "Literal",
              "start": 57,
              "end": 62,
              "value": "./0",
              "raw": "\"./0\""
            },
            "alternate": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 88,
            "name": "myModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 91,
            "end": 106,
            "source": {
              "type": "Identifier",
              "start": 98,
              "end": 105,
              "name": "specify",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 121,
            "name": "myModule1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 124,
            "end": 141,
            "source": {
              "type": "Identifier",
              "start": 131,
              "end": 140,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 156,
            "name": "myModule2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 159,
            "end": 187,
            "source": {
              "type": "ConditionalExpression",
              "start": 166,
              "end": 186,
              "test": {
                "type": "CallExpression",
                "start": 166,
                "end": 171,
                "callee": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 169,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "Literal",
                "start": 174,
                "end": 179,
                "value": "./1",
                "raw": "\"./1\""
              },
              "alternate": {
                "type": "Literal",
                "start": 182,
                "end": 186,
                "value": null,
                "raw": "null"
              }
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 202,
            "name": "myModule3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 205,
            "end": 217,
            "source": {
              "type": "Literal",
              "start": 212,
              "end": 216,
              "value": null,
              "raw": "null"
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
