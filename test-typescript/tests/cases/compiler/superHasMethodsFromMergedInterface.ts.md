__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 20,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 20,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 18,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 12,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 12,
              "end": 18,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 15,
                "end": 18,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 21,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 33,
        "end": 47,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 35,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 45,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 100,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 89,
                      "end": 99,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 89,
                        "end": 97,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 89,
                          "end": 94
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 97,
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "Sub",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
