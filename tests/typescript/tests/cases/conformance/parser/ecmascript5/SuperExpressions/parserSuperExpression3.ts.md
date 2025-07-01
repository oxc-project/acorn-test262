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
      "superClass": null,
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 22,
                          "end": 26
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 27,
                          "end": 32
                        },
                        "optional": false,
                        "computed": false,
                        "start": 22,
                        "end": 32
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 33,
                              "end": 34
                            },
                            "typeArguments": null,
                            "start": 33,
                            "end": 34
                          }
                        ],
                        "start": 32,
                        "end": 35
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 36,
                          "end": 37
                        }
                      ],
                      "optional": false,
                      "start": 22,
                      "end": 38
                    },
                    "directive": null,
                    "start": 22,
                    "end": 39
                  }
                ],
                "start": 16,
                "end": 43
              },
              "expression": false,
              "start": 13,
              "end": 43
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 12,
            "end": 43
          }
        ],
        "start": 8,
        "end": 45
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
