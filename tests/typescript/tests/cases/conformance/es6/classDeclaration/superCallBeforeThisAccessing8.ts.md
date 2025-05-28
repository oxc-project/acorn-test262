__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 35,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 35,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 203,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 76,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "_t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 201,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 201,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 105,
                    "end": 195,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 109,
                        "end": 195,
                        "id": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 110,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 113,
                          "end": 195,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 127,
                              "end": 146,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 127,
                                "end": 128,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "CallExpression",
                                "start": 130,
                                "end": 146,
                                "callee": {
                                  "type": "Super",
                                  "start": 130,
                                  "end": 135
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 136,
                                    "end": 145,
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 161,
                              "end": 171,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 164,
                                "end": 171,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 164,
                                  "end": 168
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 169,
                                  "end": 171,
                                  "decorators": [],
                                  "name": "_t",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
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
            },
            "kind": "constructor",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
