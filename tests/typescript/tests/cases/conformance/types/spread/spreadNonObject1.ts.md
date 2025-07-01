__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 66,
            "end": 69
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 75,
            "end": 77
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 69,
            "end": 75
          }
        ],
        "start": 66,
        "end": 77
      },
      "declare": false,
      "start": 57,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "4",
                            "raw": "\"4\"",
                            "start": 98,
                            "end": 101
                          }
                        ],
                        "start": 97,
                        "end": 102
                      },
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 106,
                            "end": 107
                          },
                          "typeArguments": null,
                          "start": 106,
                          "end": 107
                        },
                        "start": 106,
                        "end": 109
                      },
                      "start": 97,
                      "end": 109
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "optional": false,
                    "computed": false,
                    "start": 96,
                    "end": 114
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 126
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 140,
                                  "end": 141
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 149,
                                        "end": 150
                                      },
                                      "start": 146,
                                      "end": 150
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 152,
                                        "end": 153
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6",
                                        "start": 155,
                                        "end": 156
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 152,
                                      "end": 156
                                    }
                                  ],
                                  "start": 144,
                                  "end": 158
                                },
                                "definite": false,
                                "start": 140,
                                "end": 158
                              }
                            ],
                            "declare": false,
                            "start": 134,
                            "end": 159
                          }
                        ],
                        "start": 128,
                        "end": 163
                      },
                      "expression": false,
                      "start": 115,
                      "end": 163
                    }
                  ],
                  "optional": false,
                  "start": 96,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 93,
                "end": 164
              }
            ],
            "start": 89,
            "end": 167
          },
          "definite": false,
          "start": 85,
          "end": 167
        }
      ],
      "declare": false,
      "start": 79,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 168
}
```
