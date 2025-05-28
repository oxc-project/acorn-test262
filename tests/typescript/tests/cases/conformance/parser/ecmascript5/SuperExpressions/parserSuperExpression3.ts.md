__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 45,
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
        "end": 45,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 43,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 43,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 16,
                "end": 43,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 22,
                    "end": 39,
                    "expression": {
                      "type": "CallExpression",
                      "start": 22,
                      "end": 38,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 22,
                        "end": 32,
                        "object": {
                          "type": "ThisExpression",
                          "start": 22,
                          "end": 26
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 32,
                          "decorators": [],
                          "name": "super",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 32,
                        "end": 35,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 33,
                            "end": 34,
                            "typeName": {
                              "type": "Identifier",
                              "start": 33,
                              "end": 34,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 36,
                          "end": 37,
                          "value": 0,
                          "raw": "0"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
