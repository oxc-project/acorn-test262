inOperatorWithGeneric.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 70,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 70,
                "body": [
                  {
                    "type": "ForInStatement",
                    "start": 36,
                    "end": 64,
                    "body": {
                      "type": "BlockStatement",
                      "start": 53,
                      "end": 64,
                      "body": []
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 41,
                      "end": 46,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 45,
                          "end": 46,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 46,
                            "decorators": [],
                            "name": "p",
                            "optional": false
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 24,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 24,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 23,
                      "end": 24,
                      "typeName": {
                        "type": "Identifier",
                        "start": 23,
                        "end": 24,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
