__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 23,
              "end": 30,
              "callee": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 57,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 57,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 55,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 54,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 138,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 138,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 58,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 75,
          "end": 138,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 83,
            "end": 138,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 89,
                "end": 136,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 100,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 100,
                  "end": 136,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 103,
                    "end": 136,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 113,
                        "end": 130,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 113,
                          "end": 129,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 113,
                            "end": 119,
                            "object": {
                              "type": "ThisExpression",
                              "start": 113,
                              "end": 117
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 119,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "NewExpression",
                            "start": 122,
                            "end": 129,
                            "callee": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        },
                        "directive": null
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 139,
          "end": 161,
          "object": {
            "type": "MemberExpression",
            "start": 139,
            "end": 153,
            "object": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 146,
              "end": 153,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 161,
            "decorators": [],
            "name": "Another",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
