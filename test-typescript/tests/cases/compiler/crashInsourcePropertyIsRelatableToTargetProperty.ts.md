__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 104,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 73,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 73,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 69,
              "end": 73,
              "literal": {
                "type": "Literal",
                "start": 69,
                "end": 73,
                "raw": "\"hi\"",
                "value": "hi",
                "regex": null,
                "bigint": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 90,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 90,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 82,
              "end": 90,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 91,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 93,
          "end": 103,
          "exprName": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 178,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 164,
            "end": 176,
            "argument": {
              "type": "Literal",
              "start": 171,
              "end": 175,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 127,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 127,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 121,
              "end": 127
            }
          }
        },
        {
          "type": "Identifier",
          "start": 129,
          "end": 144,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 144,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 136,
              "end": 144,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 145,
        "end": 157,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 147,
          "end": 157,
          "exprName": {
            "type": "Identifier",
            "start": 154,
            "end": 157,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 187,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 190,
            "end": 203,
            "arguments": [
              {
                "type": "Literal",
                "start": 194,
                "end": 198,
                "raw": "\"hi\"",
                "value": "hi",
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrayExpression",
                "start": 200,
                "end": 202,
                "elements": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 190,
              "end": 193,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
