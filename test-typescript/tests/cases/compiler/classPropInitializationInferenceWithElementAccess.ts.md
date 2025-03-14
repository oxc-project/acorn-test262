__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 224,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 224,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 23,
        "end": 224,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 33,
          "end": 224,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 39,
              "end": 41,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 48,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 55,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 65,
              "end": 67,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "raw": "0",
                "value": 0
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 73,
              "end": 222,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 84,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 84,
                "end": 222,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 99,
                  "end": 222,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 109,
                      "end": 128,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 109,
                        "end": 127,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 109,
                          "end": 118,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 109,
                            "end": 113
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 114,
                            "end": 117,
                            "raw": "'x'",
                            "value": "x"
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "start": 121,
                          "end": 127,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 122,
                              "end": 126,
                              "decorators": [],
                              "name": "seed",
                              "optional": false
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 137,
                      "end": 158,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 137,
                        "end": 157,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 137,
                          "end": 146,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 137,
                            "end": 141
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 142,
                            "end": 145,
                            "raw": "'y'",
                            "value": "y"
                          }
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 149,
                          "end": 157,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 151,
                              "end": 155,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 155,
                                "decorators": [],
                                "name": "seed",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 155,
                                "decorators": [],
                                "name": "seed",
                                "optional": false
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 167,
                      "end": 189,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 167,
                        "end": 188,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 167,
                          "end": 176,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 167,
                            "end": 171
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 172,
                            "end": 175,
                            "raw": "'z'",
                            "value": "z"
                          }
                        },
                        "right": {
                          "type": "TemplateLiteral",
                          "start": 179,
                          "end": 188,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 182,
                              "end": 186,
                              "decorators": [],
                              "name": "seed",
                              "optional": false
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 179,
                              "end": 182,
                              "tail": false,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 186,
                              "end": 188,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 199,
                      "end": 216,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 199,
                        "end": 215,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 199,
                          "end": 206,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 199,
                            "end": 203
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 204,
                            "end": 205,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "start": 209,
                          "end": 215,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 210,
                              "end": 214,
                              "decorators": [],
                              "name": "seed",
                              "optional": false
                            }
                          ]
                        }
                      }
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
                    "start": 85,
                    "end": 97,
                    "decorators": [],
                    "name": "seed",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 91,
                        "end": 97
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 29,
          "end": 32,
          "decorators": [],
          "name": "Cls",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
