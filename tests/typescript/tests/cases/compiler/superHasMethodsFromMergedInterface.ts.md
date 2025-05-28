__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 20,
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
        "end": 20,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 18,
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
            "value": {
              "type": "FunctionExpression",
              "start": 12,
              "end": 18,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 15,
                "end": 18,
                "body": []
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 21,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 33,
        "end": 47,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 35,
            "end": 45,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 108,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 106,
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
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 106,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 100,
                    "expression": {
                      "type": "CallExpression",
                      "start": 89,
                      "end": 99,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 89,
                        "end": 97,
                        "object": {
                          "type": "Super",
                          "start": 89,
                          "end": 94
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 97,
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
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
