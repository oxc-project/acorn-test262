__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
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
        "start": 34,
        "end": 37,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 37,
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "type": "ExportDefaultDeclaration",
      "start": 45,
      "end": 120,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 60,
        "end": 120,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 68,
          "end": 120,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 74,
              "end": 100,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 82,
                "end": 100,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 85,
                  "end": 100,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 87,
                      "end": 98,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 94,
                        "end": 97,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 95,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 105,
              "end": 118,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 40,
            "end": 44,
            "expression": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 130,
            "end": 137,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
