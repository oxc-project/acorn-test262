__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 33,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 17,
              "end": 24,
              "value": "prop1",
              "raw": "\"prop1\""
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
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 117,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 117,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 54,
                    "end": 82,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 58,
                        "end": 81,
                        "id": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 62,
                          "end": 81,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "MemberExpression",
                            "start": 68,
                            "end": 81,
                            "object": {
                              "type": "ThisExpression",
                              "start": 68,
                              "end": 72
                            },
                            "property": {
                              "type": "Literal",
                              "start": 73,
                              "end": 80,
                              "value": "prop1",
                              "raw": "\"prop1\""
                            },
                            "computed": true,
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 91,
                    "end": 111,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 95,
                        "end": 110,
                        "id": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 104,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 98,
                              "end": 104
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 107,
                          "end": 110,
                          "callee": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
