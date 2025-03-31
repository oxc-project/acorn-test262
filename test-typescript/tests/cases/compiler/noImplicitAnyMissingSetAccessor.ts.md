__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 170,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 47,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 86,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 54,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 84,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 99,
        "name": "Child",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 114,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 139,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 162,
                    "argument": {
                      "type": "Literal",
                      "start": 159,
                      "end": 161,
                      "value": "",
                      "raw": "\"\""
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
            "accessibility": "public"
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
