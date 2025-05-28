__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 60,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "TSTypeAssertion",
                            "start": 87,
                            "end": 96,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 88,
                              "end": 91,
                              "typeName": {
                                "type": "Identifier",
                                "start": 88,
                                "end": 91,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "expression": {
                              "type": "Literal",
                              "start": 92,
                              "end": 96,
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 98,
                          "end": 110,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 112,
                          "end": 121,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "UnaryExpression",
                            "start": 115,
                            "end": 121,
                            "operator": "void",
                            "argument": {
                              "type": "Literal",
                              "start": 120,
                              "end": 121,
                              "value": 4,
                              "raw": "4"
                            },
                            "prefix": true
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 171,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 171,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 138,
                  "end": 143,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 142,
                    "end": 143,
                    "value": 4,
                    "raw": "4"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 145,
                  "end": 153,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 153,
                    "value": null,
                    "raw": "null"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 155,
                  "end": 161,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 159,
                    "end": 161,
                    "value": "",
                    "raw": "''"
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
