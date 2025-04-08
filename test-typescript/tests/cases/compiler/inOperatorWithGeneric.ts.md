__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 24,
                  "name": "x",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 70,
                "body": [
                  {
                    "type": "ForInStatement",
                    "start": 36,
                    "end": 64,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 41,
                      "end": 46,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 45,
                          "end": 46,
                          "id": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 46,
                            "name": "p",
                            "typeAnnotation": null,
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
                    "right": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 53,
                      "end": 64,
                      "body": []
                    }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
