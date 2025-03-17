__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 22,
              "end": 30,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
                "body": []
              },
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
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 100,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 100,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 72,
                    "end": 85,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 72,
                      "end": 85,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 72,
                        "end": 83,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 72,
                          "end": 77
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 83,
                          "decorators": [],
                          "name": "field",
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
        "start": 39,
        "end": 41,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 116,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 104,
          "end": 114,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 104,
            "end": 112,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 110,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
