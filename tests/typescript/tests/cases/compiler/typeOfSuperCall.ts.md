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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 91,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 89,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 48,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 89,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 89,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 83,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 65,
                        "end": 82,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 72,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 68,
                              "end": 72
                            }
                          }
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
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
