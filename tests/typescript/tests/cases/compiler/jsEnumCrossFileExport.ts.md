__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 306,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "Host",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 13,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 36,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 31,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "Host",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "UserMetrics",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 34,
          "end": 36,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 186,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 60,
          "end": 83,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 60,
            "end": 76,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "Host",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
              "decorators": [],
              "name": "UserMetrics",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 77,
            "end": 83,
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 86,
          "end": 186,
          "properties": [
            {
              "type": "Property",
              "start": 92,
              "end": 107,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 104,
                "decorators": [],
                "name": "WindowDocked",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 106,
                "end": 107,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "Property",
              "start": 113,
              "end": 130,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 113,
                "end": 127,
                "decorators": [],
                "name": "WindowUndocked",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 130,
                "raw": "2",
                "value": 2
              }
            },
            {
              "type": "Property",
              "start": 136,
              "end": 159,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 156,
                "decorators": [],
                "name": "ScriptsBreakpointSet",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 158,
                "end": 159,
                "raw": "3",
                "value": 3
              }
            },
            {
              "type": "Property",
              "start": 165,
              "end": 183,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 165,
                "end": 180,
                "decorators": [],
                "name": "TimelineStarted",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "raw": "4",
                "value": 4
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 306,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 269,
          "end": 290,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 269,
            "end": 285,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "Host",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 274,
              "end": 285,
              "decorators": [],
              "name": "UserMetrics",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 290,
            "decorators": [],
            "name": "Blah",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 293,
          "end": 306,
          "properties": [
            {
              "type": "Property",
              "start": 299,
              "end": 304,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 302,
                "end": 304,
                "raw": "12",
                "value": 12
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 25,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 25,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 28,
          "end": 192,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 34,
            "end": 192,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 99,
                "end": 111,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 105,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 105,
                  "end": 111,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 109,
                    "end": 111,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "MethodDefinition",
                "start": 116,
                "end": 190,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "decorators": [],
                  "name": "usage",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 121,
                  "end": 190,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 124,
                    "end": 190,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 134,
                        "end": 184,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 134,
                          "end": 183,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 146,
                              "end": 182,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 146,
                                "end": 169,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 146,
                                  "end": 162,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 146,
                                    "end": 150,
                                    "decorators": [],
                                    "name": "Host",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 151,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "UserMetrics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 163,
                                  "end": 169,
                                  "decorators": [],
                                  "name": "Action",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 170,
                                "end": 182,
                                "decorators": [],
                                "name": "WindowDocked",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 134,
                            "end": 145,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 134,
                              "end": 138
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 145,
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 244,
            "end": 248,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 304,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 300,
            "end": 304,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
