__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "v",
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "p",
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 40,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "s",
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
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 178,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "v",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 101,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "p",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 176,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 130,
                    "expression": {
                      "type": "CallExpression",
                      "start": 123,
                      "end": 130,
                      "callee": {
                        "type": "Super",
                        "start": 123,
                        "end": 128
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 145,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 134,
                      "end": 144,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 134,
                        "end": 140,
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 143,
                        "end": 144,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 149,
                    "end": 160,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 149,
                      "end": 159,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 155,
                        "object": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 158,
                        "end": 159,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 164,
                    "end": 172,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 164,
                      "end": 171,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 164,
                        "end": 167,
                        "object": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 170,
                        "end": 171,
                        "value": 1,
                        "raw": "1"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
