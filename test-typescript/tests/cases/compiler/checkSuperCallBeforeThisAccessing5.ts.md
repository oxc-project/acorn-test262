__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 40,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 38,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 27,
                  "end": 33,
                  "argument": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 33,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 92,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 108,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 135,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 134,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 133,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 127,
                            "end": 131
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 121,
                        "end": 126
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
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
