__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 53,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 44,
                  "name": "func",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 36,
                      "end": 44,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 38,
                        "end": 44,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 40,
                          "end": 44,
                          "typeName": {
                            "type": "Identifier",
                            "start": 40,
                            "end": 44,
                            "name": "Base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 53,
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
      "type": "ClassDeclaration",
      "start": 56,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "name": "Super",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 80,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 149,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 111,
                    "end": 131,
                    "expression": {
                      "type": "CallExpression",
                      "start": 111,
                      "end": 130,
                      "callee": {
                        "type": "Super",
                        "start": 111,
                        "end": 116
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 118,
                          "end": 128,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 124,
                            "end": 128
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
