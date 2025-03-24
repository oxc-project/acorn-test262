__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 38,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 22,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 38,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 32,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 26,
                      "end": 32
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 38,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "name": "blah",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 74,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 73,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 55,
                  "end": 61
                }
              }
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
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 141,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 138,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 138,
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 125,
                          "end": 137,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 125,
                            "end": 135,
                            "object": {
                              "type": "Super",
                              "start": 125,
                              "end": 130
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 135,
                              "name": "blah",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
