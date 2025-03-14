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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 22,
              "decorators": [],
              "name": "content",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 34,
                      "decorators": [],
                      "name": "Box",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 158,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 158,
              "async": false,
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 115,
                            "decorators": [],
                            "name": "content",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
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
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 131,
                                  "end": 134,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 134,
                                    "decorators": [],
                                    "name": "Box",
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "SpreadElement",
                          "start": 142,
                          "end": 146,
                          "argument": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 146,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
