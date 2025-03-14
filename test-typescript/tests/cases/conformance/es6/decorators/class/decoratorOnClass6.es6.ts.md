decoratorOnClass6.es6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
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
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 112,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 52,
        "end": 112,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 60,
          "end": 112,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 66,
              "end": 92,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
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
                "start": 74,
                "end": 92,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 77,
                  "end": 92,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 79,
                      "end": 90,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 86,
                        "end": 89,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
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
              "start": 97,
              "end": 110,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
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
                "start": 108,
                "end": 109,
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
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 122,
            "end": 129,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
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
  "sourceType": "script"
}
```
