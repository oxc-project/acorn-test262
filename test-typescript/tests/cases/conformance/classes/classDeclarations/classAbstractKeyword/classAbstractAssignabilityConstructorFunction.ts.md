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
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 20,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 62,
            "name": "AAA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 62,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 52,
                "end": 62,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 61,
                    "end": 62,
                    "typeName": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 84,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "name": "AAA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 117,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 116,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 104,
          "end": 107,
          "name": "AAA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 110,
          "end": 116,
          "value": "asdf",
          "raw": "\"asdf\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
