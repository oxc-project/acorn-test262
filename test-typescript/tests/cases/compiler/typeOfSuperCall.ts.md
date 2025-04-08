__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
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
        "start": 8,
        "end": 11,
        "body": []
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
      "start": 13,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 89,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 48,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 89,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 89,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 83,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 65,
                        "end": 82,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 72,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 68,
                              "end": 72
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 75,
                          "end": 82,
                          "callee": {
                            "type": "Super",
                            "start": 75,
                            "end": 80
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
