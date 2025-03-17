__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "bar2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 19,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 60,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 55,
                      "end": 57,
                      "value": "",
                      "raw": "''"
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 126,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 124,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 83,
                      "end": 123,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 84,
                          "end": 96,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "TSTypeAssertion",
                            "start": 87,
                            "end": 96,
                            "expression": {
                              "type": "Literal",
                              "start": 92,
                              "end": 96,
                              "value": null,
                              "raw": "null"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 88,
                              "end": 91,
                              "typeName": {
                                "type": "Identifier",
                                "start": 88,
                                "end": 91,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 98,
                          "end": 110,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 112,
                          "end": 121,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "UnaryExpression",
                            "start": 115,
                            "end": 121,
                            "operator": "void",
                            "prefix": true,
                            "argument": {
                              "type": "Literal",
                              "start": 120,
                              "end": 121,
                              "value": 4,
                              "raw": "4"
                            }
                          },
                          "kind": "init",
                          "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 171,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 138,
                  "end": 143,
                  "left": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 142,
                    "end": 143,
                    "value": 4,
                    "raw": "4"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 145,
                  "end": 153,
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 153,
                    "value": null,
                    "raw": "null"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 155,
                  "end": 161,
                  "left": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 159,
                    "end": 161,
                    "value": "",
                    "raw": "''"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 171,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 169,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 165,
                      "end": 168,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "accessibility": "public"
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
