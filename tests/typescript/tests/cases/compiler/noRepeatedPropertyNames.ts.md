__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 177,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 85,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 67,
            "decorators": [],
            "name": "first",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 70,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 72,
                "end": 76,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 75,
                  "end": 76,
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
                "start": 78,
                "end": 82,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "value": 2,
                  "raw": "2"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 177,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 177,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 175,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 175,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 175,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 144,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 120,
                        "end": 143,
                        "id": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 126,
                          "decorators": [],
                          "name": "second",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 129,
                          "end": 143,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 131,
                              "end": 135,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 132,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 134,
                                "end": 135,
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
                              "start": 137,
                              "end": 141,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 137,
                                "end": 138,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 140,
                                "end": 141,
                                "value": 2,
                                "raw": "2"
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
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 169,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 160,
                      "end": 168,
                      "object": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 166,
                        "decorators": [],
                        "name": "second",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
