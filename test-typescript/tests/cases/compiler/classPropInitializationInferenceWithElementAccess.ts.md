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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 23,
        "end": 224,
        "id": {
          "type": "Identifier",
          "start": 29,
          "end": 32,
          "name": "Cls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 33,
          "end": 224,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 39,
              "end": 41,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "x",
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
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 48,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "y",
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
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 55,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "name": "z",
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
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 65,
              "end": 67,
              "static": false,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "value": 0,
                "raw": "0"
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 73,
              "end": 222,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 84,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 84,
                "end": 222,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 85,
                    "end": 97,
                    "name": "seed",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 91,
                        "end": 97
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 109,
                            "end": 113
                          },
                          "property": {
                            "type": "Literal",
                            "start": 114,
                            "end": 117,
                            "value": "x",
                            "raw": "'x'"
                          },
                          "computed": true,
                          "optional": false
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
                              "name": "seed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ]
                        }
                      },
                      "directive": null
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 137,
                            "end": 141
                          },
                          "property": {
                            "type": "Literal",
                            "start": 142,
                            "end": 145,
                            "value": "y",
                            "raw": "'y'"
                          },
                          "computed": true,
                          "optional": false
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
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 155,
                                "name": "seed",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 155,
                                "name": "seed",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      },
                      "directive": null
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 167,
                            "end": 171
                          },
                          "property": {
                            "type": "Literal",
                            "start": 172,
                            "end": 175,
                            "value": "z",
                            "raw": "'z'"
                          },
                          "computed": true,
                          "optional": false
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
                              "name": "seed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 179,
                              "end": 182,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 186,
                              "end": 188,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ]
                        }
                      },
                      "directive": null
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 199,
                            "end": 203
                          },
                          "property": {
                            "type": "Literal",
                            "start": 204,
                            "end": 205,
                            "value": 0,
                            "raw": "0"
                          },
                          "computed": true,
                          "optional": false
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
                              "name": "seed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ]
                        }
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
