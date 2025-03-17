__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
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
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 73,
          "name": "x",
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
                "value": "hi",
                "raw": "\"hi\""
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 90,
          "name": "items",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 127,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 127,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 121,
              "end": 127
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 129,
          "end": 144,
          "name": "items",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 187,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 190,
            "end": 203,
            "callee": {
              "type": "Identifier",
              "start": 190,
              "end": 193,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 194,
                "end": 198,
                "value": "hi",
                "raw": "\"hi\""
              },
              {
                "type": "ArrayExpression",
                "start": 200,
                "end": 202,
                "elements": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
