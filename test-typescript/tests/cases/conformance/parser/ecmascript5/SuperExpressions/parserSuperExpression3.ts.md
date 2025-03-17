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
        "end": 45,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 43,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 43,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                      "optional": false,
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
