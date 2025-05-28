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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
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
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 33,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 17,
              "end": 24,
              "value": "prop1",
              "raw": "\"prop1\""
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 117,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 117,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 54,
                    "end": 82,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 58,
                        "end": 81,
                        "id": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 62,
                          "end": 81,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                            "optional": false,
                            "computed": true
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 91,
                    "end": 111,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 95,
                        "end": 110,
                        "id": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 104,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 98,
                              "end": 104
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 107,
                          "end": 110,
                          "callee": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
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
