__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 346,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "IText",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
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
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 56,
        "name": "TextSpan",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 59,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 74,
        "name": "SubText",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 83,
        "end": 91,
        "name": "TextBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 114,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 176,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 126,
                  "name": "text",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 126,
                        "name": "IText",
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
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 142,
                  "name": "span",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 142,
                        "name": "TextSpan",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 166,
                    "expression": {
                      "type": "CallExpression",
                      "start": 158,
                      "end": 165,
                      "callee": {
                        "type": "Super",
                        "start": 158,
                        "end": 163
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 180,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 194,
        "name": "TextBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 346,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 222,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 240,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 234,
                "end": 240
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 250,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 264,
              "name": "subText",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 344,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 265,
                  "end": 279,
                  "name": "span",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 279,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 279,
                        "name": "TextSpan",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 344,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 303,
                    "end": 334,
                    "argument": {
                      "type": "NewExpression",
                      "start": 310,
                      "end": 333,
                      "callee": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 321,
                        "name": "SubText",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 322,
                          "end": 326
                        },
                        {
                          "type": "Identifier",
                          "start": 328,
                          "end": 332,
                          "name": "span",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 280,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 287,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 287,
                    "name": "IText",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 206,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 206,
            "end": 211,
            "name": "IText",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
