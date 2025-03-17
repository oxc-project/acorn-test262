__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 42,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
                      "value": 0,
                      "raw": "0"
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
      "start": 51,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 123,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 88,
              "end": 111,
              "object": {
                "type": "ObjectExpression",
                "start": 88,
                "end": 108,
                "properties": [
                  {
                    "type": "Property",
                    "start": 90,
                    "end": 106,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 102,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 91,
                        "end": 100,
                        "object": {
                          "type": "Super",
                          "start": 91,
                          "end": 96
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 100,
                          "name": "bar",
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
                    "value": {
                      "type": "Literal",
                      "start": 105,
                      "end": 106,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "start": 109,
                "end": 110,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 123,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 123,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
