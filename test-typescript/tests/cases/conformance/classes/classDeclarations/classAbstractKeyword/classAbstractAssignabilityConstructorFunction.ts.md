classAbstractAssignabilityConstructorFunction.ts
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
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 20,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 62,
            "decorators": [],
            "name": "AAA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 62,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 52,
                "end": 62,
                "abstract": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "name": "AAA",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "AAA",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 110,
          "end": 116,
          "raw": "\"asdf\"",
          "value": "asdf"
        }
      }
    }
  ],
  "sourceType": "script"
}
```
