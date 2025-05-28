__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 25,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 11,
            "end": 13,
            "members": []
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 16,
            "end": 25
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 37,
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 40,
        "end": 80,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 60,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "email",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 83,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 99,
        "decorators": [],
        "name": "PartialUser",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 102,
        "end": 115,
        "typeName": {
          "type": "Identifier",
          "start": 102,
          "end": 109,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 109,
          "end": 115,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 110,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 114,
                "decorators": [],
                "name": "User",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 205,
        "decorators": [],
        "name": "isUser",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 206,
          "end": 214,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 214,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 211,
              "end": 214,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 214,
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 235,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 217,
          "end": 235,
          "parameterName": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 224,
            "end": 235,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 235,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 235,
                "decorators": [],
                "name": "PartialUser",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 256,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 242,
            "end": 254,
            "argument": {
              "type": "Literal",
              "start": 249,
              "end": 253,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 278,
        "decorators": [],
        "name": "getUserName",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 279,
          "end": 287,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 282,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 284,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 284,
                "end": 287,
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 362,
        "body": [
          {
            "type": "IfStatement",
            "start": 295,
            "end": 344,
            "test": {
              "type": "CallExpression",
              "start": 299,
              "end": 310,
              "callee": {
                "type": "Identifier",
                "start": 299,
                "end": 305,
                "decorators": [],
                "name": "isUser",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 309,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 312,
              "end": 344,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 322,
                  "end": 338,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 329,
                    "end": 337,
                    "object": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 332,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 337,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 350,
            "end": 360,
            "argument": {
              "type": "Literal",
              "start": 357,
              "end": 359,
              "value": "",
              "raw": "''"
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
