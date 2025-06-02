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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
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
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 75,
            "end": 77,
            "value": {
              "raw": "",
              "cooked": ""
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 167,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
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
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 114,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 115,
                      "end": 163,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 128,
                        "end": 163,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 134,
                            "end": 159,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 140,
                                "end": 158,
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
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 152,
                                        "end": 153,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 155,
                                        "end": 156,
                                        "value": 6,
                                        "raw": "6"
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        ]
                      },
                      "expression": false
                    }
                  ],
                  "optional": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
