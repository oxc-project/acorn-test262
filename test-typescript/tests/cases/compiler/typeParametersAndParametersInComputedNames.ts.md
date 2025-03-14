typeParametersAndParametersInComputedNames.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 49,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 49,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 37,
            "end": 47,
            "argument": {
              "type": "Literal",
              "start": 44,
              "end": 46,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 20,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 20,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 30,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 97,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 95,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 66,
              "end": 75,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 69,
                "end": 72,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 70,
                    "end": 71,
                    "typeName": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 95,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 95,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 84,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 76,
                "end": 79,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 77,
                    "end": 78,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
