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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 37,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 36,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 31,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "Host",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "UserMetrics",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 34,
          "end": 36,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 187,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 186,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 60,
          "end": 83,
          "object": {
            "type": "MemberExpression",
            "start": 60,
            "end": 76,
            "object": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "Host",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
              "decorators": [],
              "name": "UserMetrics",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 77,
            "end": 83,
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 104,
                "decorators": [],
                "name": "WindowDocked",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 106,
                "end": 107,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 113,
              "end": 130,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 113,
                "end": 127,
                "decorators": [],
                "name": "WindowUndocked",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 130,
                "value": 2,
                "raw": "2"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 136,
              "end": 159,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 156,
                "decorators": [],
                "name": "ScriptsBreakpointSet",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 158,
                "end": 159,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 165,
              "end": 183,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 165,
                "end": 180,
                "decorators": [],
                "name": "TimelineStarted",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "value": 4,
                "raw": "4"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 306,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 269,
          "end": 290,
          "object": {
            "type": "MemberExpression",
            "start": 269,
            "end": 285,
            "object": {
              "type": "Identifier",
              "start": 269,
              "end": 273,
              "decorators": [],
              "name": "Host",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 274,
              "end": 285,
              "decorators": [],
              "name": "UserMetrics",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 286,
            "end": 290,
            "decorators": [],
            "name": "Blah",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 302,
                "end": 304,
                "value": 12,
                "raw": "12"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 25,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 25,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 28,
          "end": 192,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 34,
            "end": 192,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 99,
                "end": 111,
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
                "value": {
                  "type": "FunctionExpression",
                  "start": 105,
                  "end": 111,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 109,
                    "end": 111,
                    "body": []
                  },
                  "expression": false
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null
              },
              {
                "type": "MethodDefinition",
                "start": 116,
                "end": 190,
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
                "value": {
                  "type": "FunctionExpression",
                  "start": 121,
                  "end": 190,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 124,
                    "end": 190,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 134,
                        "end": 184,
                        "expression": {
                          "type": "CallExpression",
                          "start": 134,
                          "end": 183,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 134,
                            "end": 145,
                            "object": {
                              "type": "ThisExpression",
                              "start": 134,
                              "end": 138
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 145,
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 146,
                              "end": 182,
                              "object": {
                                "type": "MemberExpression",
                                "start": 146,
                                "end": 169,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 146,
                                  "end": 162,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 146,
                                    "end": 150,
                                    "decorators": [],
                                    "name": "Host",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 151,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "UserMetrics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 163,
                                  "end": 169,
                                  "decorators": [],
                                  "name": "Action",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 170,
                                "end": 182,
                                "decorators": [],
                                "name": "WindowDocked",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null
              }
            ]
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 248,
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
            "value": "ok",
            "raw": "\"ok\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 305,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 304,
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
            "value": "ok",
            "raw": "\"ok\""
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
