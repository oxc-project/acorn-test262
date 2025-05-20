__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 168,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 78,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 66,
        "end": 77,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 66,
            "end": 69,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 75,
            "end": 77,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 69,
            "end": 75
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 89,
            "end": 167,
            "properties": [
              {
                "type": "Property",
                "start": 93,
                "end": 164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 96,
                  "end": 164,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 115,
                      "end": 163,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 128,
                        "end": 163,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 134,
                            "end": 159,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 140,
                                "end": 158,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 141,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 144,
                                  "end": 158,
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "start": 146,
                                      "end": 150,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 149,
                                        "end": 150,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "start": 152,
                                      "end": 156,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 152,
                                        "end": 153,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "Literal",
                                        "start": 155,
                                        "end": 156,
                                        "raw": "6",
                                        "value": 6
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 96,
                    "end": 114,
                    "computed": false,
                    "object": {
                      "type": "TSAsExpression",
                      "start": 97,
                      "end": 109,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 97,
                        "end": 102,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 98,
                            "end": 101,
                            "raw": "\"4\"",
                            "value": "4"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 106,
                        "end": 109,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 106,
                          "end": 107,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 107,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
