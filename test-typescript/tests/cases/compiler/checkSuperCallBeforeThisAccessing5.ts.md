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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 38,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 38,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 27,
                  "end": 33,
                  "argument": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 33,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 35,
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
      "start": 41,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 108,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 141,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 135,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 134,
                      "callee": {
                        "type": "Super",
                        "start": 121,
                        "end": 126
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 133,
                          "object": {
                            "type": "ThisExpression",
                            "start": 127,
                            "end": 131
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
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
