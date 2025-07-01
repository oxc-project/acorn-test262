__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "expression": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 23,
            "end": 25
          },
          "abstract": false,
          "declare": false,
          "start": 17,
          "end": 25
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 47
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "attrib",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 56
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 58,
                            "end": 64
                          },
                          "start": 56,
                          "end": 64
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 50,
                        "end": 64
                      }
                    ],
                    "start": 48,
                    "end": 66
                  }
                ],
                "start": 47,
                "end": 67
              },
              "start": 39,
              "end": 67
            },
            "start": 36,
            "end": 67
          },
          "start": 29,
          "end": 67
        },
        "start": 17,
        "end": 67
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 86
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 99,
                        "end": 104
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 99,
                      "end": 106
                    },
                    "directive": null,
                    "start": 99,
                    "end": 106
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "attrib",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 126
                        },
                        "optional": false,
                        "computed": false,
                        "start": 115,
                        "end": 126
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 129,
                        "end": 130
                      },
                      "start": 115,
                      "end": 130
                    },
                    "directive": null,
                    "start": 115,
                    "end": 130
                  }
                ],
                "start": 89,
                "end": 136
              },
              "expression": false,
              "start": 86,
              "end": 136
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 75,
            "end": 136
          }
        ],
        "start": 69,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
