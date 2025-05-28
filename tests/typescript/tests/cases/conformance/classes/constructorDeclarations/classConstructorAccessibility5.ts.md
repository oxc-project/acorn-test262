__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 46,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 46,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 38,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 44,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 116,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 60,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 69,
        "end": 73,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 108,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 91,
              "decorators": [],
              "name": "make",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 108,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 108,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 106,
                    "expression": {
                      "type": "NewExpression",
                      "start": 96,
                      "end": 106,
                      "callee": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 104,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "ClassDeclaration",
      "start": 118,
      "end": 179,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 133,
        "decorators": [],
        "name": "Unrelated",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 168,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "decorators": [],
              "name": "fake",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 168,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 168,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 166,
                    "expression": {
                      "type": "NewExpression",
                      "start": 156,
                      "end": 166,
                      "callee": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 164,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
