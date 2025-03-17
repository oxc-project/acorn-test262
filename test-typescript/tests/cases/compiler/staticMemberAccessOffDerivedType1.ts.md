__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "SomeBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 65,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "name": "GetNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 65,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 65,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 50,
                    "end": 59,
                    "argument": {
                      "type": "Literal",
                      "start": 57,
                      "end": 58,
                      "value": 2,
                      "raw": "2"
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 92,
        "name": "SomeBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 133,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 116,
              "name": "SomeNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 119,
              "end": 132,
              "callee": {
                "type": "MemberExpression",
                "start": 119,
                "end": 130,
                "object": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 130,
                  "name": "GetNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
