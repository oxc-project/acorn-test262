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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 49,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 47,
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
              "value": {
                "type": "FunctionExpression",
                "start": 26,
                "end": 47,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": "I am B",
                        "raw": "\"I am B\""
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
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
      "start": 51,
      "end": 89,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 58,
        "end": 89,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        },
        "expression": false
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
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
        "expression": false
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
  "end": 218,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 75,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 74,
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
            "test": {
              "type": "CallExpression",
              "start": 49,
              "end": 54,
              "callee": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 107,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 106,
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
            "source": {
              "type": "Identifier",
              "start": 98,
              "end": 105,
              "decorators": [],
              "name": "specify",
              "optional": false,
              "typeAnnotation": null
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 142,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 141,
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
            "source": {
              "type": "Identifier",
              "start": 131,
              "end": 140,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 188,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 187,
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
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 218,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 217,
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
            "source": {
              "type": "Literal",
              "start": 212,
              "end": 216,
              "value": null,
              "raw": "null"
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
