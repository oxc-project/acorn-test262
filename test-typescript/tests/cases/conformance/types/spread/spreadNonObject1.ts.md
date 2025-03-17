__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 169,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 66,
        "end": 77,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 66,
            "end": 69,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 75,
            "end": 77,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 96,
                  "end": 164,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 96,
                    "end": 114,
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
                            "value": "4",
                            "raw": "\"4\""
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 107,
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 115,
                      "end": 163,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 141,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                        "name": "s",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "start": 152,
                                      "end": 156,
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 152,
                                        "end": 153,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 155,
                                        "end": 156,
                                        "value": 6,
                                        "raw": "6"
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
