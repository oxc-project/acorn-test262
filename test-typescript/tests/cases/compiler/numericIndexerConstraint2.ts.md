__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 21,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 21,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 21,
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
      "type": "VariableDeclaration",
      "start": 24,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 56,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 56,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 33,
                    "end": 54,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 34,
                        "end": 47,
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 47,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 41,
                            "end": 47
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 50,
                        "end": 53,
                        "typeName": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 53,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 81,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 65,
                "end": 81,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 79,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 70,
                      "name": "one",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 83,
        "end": 88,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
