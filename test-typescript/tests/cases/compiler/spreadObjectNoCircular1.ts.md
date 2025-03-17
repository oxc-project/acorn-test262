__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 37,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 35,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 22,
              "name": "content",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 25,
                "end": 34,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 25,
                    "end": 28,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 28,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 34,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 40,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "name": "Box",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 158,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 158,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 93,
                    "end": 154,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 100,
                      "end": 153,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 108,
                          "end": 134,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 115,
                            "name": "content",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "TSAsExpression",
                            "start": 117,
                            "end": 134,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 117,
                              "end": 121
                            },
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 125,
                              "end": 134,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 125,
                                  "end": 128,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 125,
                                    "end": 128,
                                    "name": "Foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 131,
                                  "end": 134,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 134,
                                    "name": "Box",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "SpreadElement",
                          "start": 142,
                          "end": 146,
                          "argument": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 146,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
